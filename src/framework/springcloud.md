---
order: 4
icon: healthicons:4-outline
---

# Spring Cloud

## How to create a demo?

1. Use IDEA `Spring Initializr` to create a template. Just choose Maven, Ignore the version. 

2. Select `Spring Web`、`Lombok`、 `DevTools`、`MySQL Driver(Optional)`, then `create`.

3. We assume that the `oneApp` module is the caller, so when we use `Spring Initializr` to create it, we select `openfeign` and `loadbalancer` dependencies. At the same time, we create a callee called `twoApp` without any dependencies.

4. Delete unnecessary dirs and files: `(rm -rf src .mvn HELP.md mvnw mvnw.cmd); (cd oneApp; rm -rf .mvn HELP.md mvnw mvnw.cmd;); (cd twoApp; rm -rf .mvn HELP.md mvnw mvnw.cmd;)`

5. Open top pom.xml

    1. Add `<packaging>pom</packaging>`
    2. Google `nacos 版本对应` 
        1. Change the `spring-boot-starter-parent` version.
        2. Maven search `spring-cloud-starter-alibaba-nacos-discovery` and select the right version.
        3. Change `<spring-cloud.version>` in `oneApp's` pom.xml to suitable version.
    3. Add `<modules>`
    4. Copy `<groupId>`, `<artifactId>`,`<version>` (outside `<parent>`)to submodules' `<parent>`, rewrite original content.

6. Open `oneApp's` application.properties add content following:

    ```bash
    server.port=8001
    spring.application.name=oneApp
    spring.cloud.nacos.server-addr=127.0.0.1:8848
    ```

7. Open `twoApp's`, add:

    ```bash
    server.port=8002
    spring.application.name=twoApp
    spring.cloud.nacos.server-addr=127.0.0.1:8848
    ```

8. Add `@EnableFeignClients` to `oneApp's` startup class.

9. Run nacos: `cd path-to-your-nacos/bin; sh startup.sh -m standalone`

10. Now we add a controller in `twoApp`, which returns a String: `This is from twoApp project`, example:

    ```java
    @RestController
    public class Controller {
        @RequestMapping("/twoUrl")
        public String two() {
            return "This is from twoApp project";
        }
    }
    ```

11. Then we add an interface in `oneApp`, example like this:

    ```java
    // This depends on twoApp's 'spring.application.name'
    @FeignClient("twoApp")
    public interface TwoFeignController {
        // Map to two's controller mapping.
        @RequestMapping("/twoUrl")
        // Function name is customizable.
        String invokeTwo();
    }
    ```

12. Add a controller in `oneApp`, like this:

    ```java
    @RestController
    @RequiredArgsConstructor
    public class Controller {
        private final TwoFeignController twoFeignController;
    
        @RequestMapping("/one")
        public String one() {
            return "From oneApp";
        }
    
        @RequestMapping("/two")
        public String two() {
            return twoFeignController.invokeTwo();
        }
    }
    ```

13. Start `oneApp` and `twoApp`

14. Open URL: `http://127.0.0.1:8848/nacos`, username/password is the same `nacos`. Go to `ServiceManagement/Service List`, we will find these two application.

15. Then we can access `http://127.0.0.1:8001/one`, result will be `"From oneApp"`, means that the application is running fine. Then we access `http://127.0.0.1:8001/two`, we can see the message from the other application, it means that the remote call is successful.

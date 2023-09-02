import {
  flowRendererV2,
  flowStyles
} from "./chunk-Q2RLO535.js";
import "./chunk-KAYFWYNJ.js";
import {
  flowDb,
  parser$1
} from "./chunk-NG2OSJYX.js";
import "./chunk-MJGSWZZI.js";
import "./chunk-BUT2I5FI.js";
import "./chunk-L226JBDG.js";
import "./chunk-SIRE7V3X.js";
import "./chunk-FLYQVS2D.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-F6XU7ILJ.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/mermaid/dist/flowDiagram-v2-e4ef3cbe.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-e4ef3cbe-DZ2PKM4I.js.map

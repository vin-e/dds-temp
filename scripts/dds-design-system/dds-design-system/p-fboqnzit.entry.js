import{r as s,h as d,H as e,d as t}from"./p-31571bfb.js";import"./p-96d88537.js";import"./p-0686f415.js";const c=class{constructor(d){s(this,d)}render(){return d(e,{class:"dds-cascader-menu"},d("dds-panel",{class:"dds-cascader-menu__panel"},this.nodes.map(s=>d("dds-cascader-node",{activePath:this.activePath,checked:this.checked,node:s}))))}static get style(){return"dds-cascader-menu{--menu-height:200px}dds-cascader-menu .dds-cascader-menu__panel{display:block;overflow:auto;scrollbar-width:none;height:var(--menu-height)}dds-cascader-menu:last-child .dds-cascader-menu__panel{border-right:none}"}},i=class{constructor(d){s(this,d),this.nodeClicked=t(this,"nodeClicked",7),this.nodeHover=t(this,"nodeHover",7)}handleClick(s){this.node.disabled||this.nodeClicked.emit(s)}handleMouseOver(s){this.node.disabled||this.nodeHover.emit(s)}isInPath(s){const d=s[this.node.level-1];return!!d&&d.uid===this.node.uid}isSelected(){return this.checked===this.node.value}render(){const s=["dds-cascader-node__icon",this.isInPath(this.activePath)?void 0:"dds-cascader-node__icon--inactive"].join(" ");return d(e,{class:"dds-cascader-node"},d("dds-list-item",{class:"dds-cascader-node__node",disabled:this.node.disabled,selected:this.isSelected(),onClick:this.handleClick.bind(this,this.node),onMouseOver:this.handleMouseOver.bind(this,this.node)},d("span",{class:"dds-cascader-node__label"},this.node.label),this.node.isLeaf()?void 0:d("dds-icon",{class:s,icon:"caret-right-filled"})))}static get style(){return"dds-cascader-node .dds-cascader-node__node .dds-list-item__element{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}dds-cascader-node dds-icon{width:20px}dds-cascader-node .dds-cascader-node__icon--inactive{color:var(--color-grey-06)}dds-cascader-node .dds-cascader-node__label{-ms-flex-positive:1;flex-grow:1}"}};export{c as dds_cascader_menu,i as dds_cascader_node};
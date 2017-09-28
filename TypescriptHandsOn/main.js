"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
// tslint:disable-next-line:eofline
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("LikeCount:" + component.likeCount + ",isSelected:" + component.isSelected);

import { jsx } from 'react/jsx-runtime';
import styled from 'styled-components';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function BaseShape(props) {
    var _a = props.color, color = _a === void 0 ? '#dadada' : _a, className = props.className, _b = props.name, name = _b === void 0 ? 'Shape name' : _b, onClick = props.onClick;
    return (jsx(StyledBaseShape, __assign({ style: { '--color': color }, className: className, onClick: onClick }, { children: jsx("span", { children: name }) })));
}
var StyledBaseShape = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n  span {\n    opacity: 0;\n    transition: all 0.1s;\n    background-color: #fff;\n    color: black;\n    display: inline-block;\n    padding: 4px;\n    border-radius: 4px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 100;\n  }\n  &:hover span {\n    opacity: 1;\n  }\n"], ["\n  position: relative;\n  span {\n    opacity: 0;\n    transition: all 0.1s;\n    background-color: #fff;\n    color: black;\n    display: inline-block;\n    padding: 4px;\n    border-radius: 4px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 100;\n  }\n  &:hover span {\n    opacity: 1;\n  }\n"])));
var templateObject_1$4;

var Square = function (props) { return jsx(StyledSquare, __assign({}, props, { name: "Square" })); };
var StyledSquare = styled(BaseShape)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  width: 200px;\n  height: 200px;\n  background: var(--color);\n  & > span {\n    top: 20px;\n  }\n"], ["\n  width: 200px;\n  height: 200px;\n  background: var(--color);\n  & > span {\n    top: 20px;\n  }\n"])));
var templateObject_1$3;

var Triangle = function (props) { return jsx(StyledTriangle, __assign({}, props, { name: "Triangle" })); };
var StyledTriangle = styled(BaseShape)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 0;\n\theight: 0;\n\tborder-left: 100px solid transparent;\n\tborder-right: 100px solid transparent;\n\tborder-bottom: 200px solid var(--color);\n  & > span {\n    top: 100px;\n  }\n"], ["\n  width: 0;\n\theight: 0;\n\tborder-left: 100px solid transparent;\n\tborder-right: 100px solid transparent;\n\tborder-bottom: 200px solid var(--color);\n  & > span {\n    top: 100px;\n  }\n"])));
var templateObject_1$2;

var Circle = function (props) { return jsx(StyledCircle, __assign({}, props, { name: "Circle" })); };
var StyledCircle = styled(BaseShape)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: 200px;\n  height: 200px;\n  background: var(--color);\n  border-radius: 50%;\n  & > span {\n    top: 20px;\n  }\n"], ["\n  width: 200px;\n  height: 200px;\n  background: var(--color);\n  border-radius: 50%;\n  & > span {\n    top: 20px;\n  }\n"])));
var templateObject_1$1;

var Hexagon = function (props) { return jsx(StyledHexagon, __assign({}, props, { name: "Hexagon" })); };
var StyledHexagon = styled(BaseShape)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 60px;\n  width: 208px;\n  height: 120px;\n  background-color: var(--color);\n  border-color: var(--color);\n  position: relative;\n  display: inline-block;\n  &::before {\n    content: '';\n    width: 0; height: 0;\n    border-bottom: 60px solid;\n    border-color: inherit;\n    border-left: 104px solid transparent;\n    border-right: 104px solid transparent;\n    position: absolute;\n    top: -60px;\n  }\n  &::after {\n    content: '';\n    width: 0;\n    position: absolute;\n    bottom: -60px;\n    border-top: 60px solid;\n    border-color: inherit;\n    border-left: 104px solid transparent;\n    border-right: 104px solid transparent;\n  }\n"], ["\n  margin-top: 60px;\n  width: 208px;\n  height: 120px;\n  background-color: var(--color);\n  border-color: var(--color);\n  position: relative;\n  display: inline-block;\n  &::before {\n    content: '';\n    width: 0; height: 0;\n    border-bottom: 60px solid;\n    border-color: inherit;\n    border-left: 104px solid transparent;\n    border-right: 104px solid transparent;\n    position: absolute;\n    top: -60px;\n  }\n  &::after {\n    content: '';\n    width: 0;\n    position: absolute;\n    bottom: -60px;\n    border-top: 60px solid;\n    border-color: inherit;\n    border-left: 104px solid transparent;\n    border-right: 104px solid transparent;\n  }\n"])));
var templateObject_1;

export { Circle, Hexagon, Square, Triangle };

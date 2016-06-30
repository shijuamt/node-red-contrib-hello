module.exports = function (RED) {
    "use strict";
    function HelloWorldNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function (msg) {
            msg.payload = "Hello";
            node.send(msg);
        });
    }
    RED.nodes.registerType("hello", HelloWorldNode);
};

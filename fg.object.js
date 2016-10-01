/**
 * This is a demo object to show how to have private and public function in a javascript object
 * FG - October 2016
 */

// create a namespace
var fg = fg || {};

// the object exists in the constructor
// I prefer to name the function, it is easier to debug when something crash inside this function
fg.Object = function Object() {

    /**
     * Private area
     * Everything "var" exist in the context of the function only
     */
    // private property not available from outside this context
    var privateProperty = "private";
    // private function not available from outside this context
    var privateFunction = function() {
        return privateProperty;
    };

    /**
     * Public area
     * Everything "this" are public properties of the object
     */
    // public accessible property
    this.publicProperty = "publicProperty";

    // getter and setter for the private property
    this.setPrivateProperty = function(newValue) {
        privateProperty = newValue;
    };
    this.getPrivateProperty = function() {
        return privateProperty;
    };

    // return the context as an instance of the object
    return this;
};

log('check the javascript source code to see what is happening');

// create a first instance of the object
instance = fg.Object();
// access the public function, change the property and verify the change
log(instance.getPrivateProperty());
instance.setPrivateProperty('new private property');
log(instance.getPrivateProperty());
instance.publicProperty = "w00t";

// create a second instance of the object
instance2 = fg.Object();
// validate that the properties belong to the instance of the object
log(instance.getPrivateProperty());
instance.setPrivateProperty('new private property');
log(instance.getPrivateProperty());
log(instance.publicProperty);

// simple log function that output to the body
function log(text) {
    var node = document.createElement('p');
    node.innerHTML = text;
    document.body.appendChild(node);
}
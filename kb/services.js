var HelloWorldActionJavaScript = Java.extend(Action, {
    onConfigure: function (self) {
        self.withLabel("Hello world git - JavaScript").withDescription("Returns a greeting text.");
        self.withArg(new StringType("name").withLabel("Your name").withDescription("Type your name."));
        self.withResult(new StringType().withLabel("Greeting").withDescription("The greeting text."));
        self.withFeature("icon", "git");
    },
    onCall: function (self, args) {
        // The onCall method in JS always gets an array of arguments. Dynamic onCall callback methods are not supported.
        return "Hello World! Hello " + args[0] + "!";
    }
});
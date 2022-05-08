class HelloWorldActionRuby < Action
    def onConfigure
        self.withLabel("Hello world git - Ruby").withDescription("Returns a greeting text.")
        self.withArg(StringType.new("name").withLabel("Your name").withDescription("Type your name."))
        self.withResult(StringType.new().withLabel("Greeting").withDescription("The greeting text."))
        self.withFeature("icon", "git")
    end
    def onCall(name)
        return "Hello World! Hello %s!" % [name]
    end
end

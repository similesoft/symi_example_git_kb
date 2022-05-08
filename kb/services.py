
class HelloWorldActionPython(Action):
    def onConfigure(self):
        self.withLabel(
            "Hello world git - Python").withDescription("Returns a greeting text.")
        self.withArg(StringType("name").withLabel(
            "Your name").withDescription("Type your name."))
        self.withResult(StringType().withLabel(
            "Greeting").withDescription("The greeting text."))
        self.withFeature("icon", "git")

    def onCall(self, name):
        return "Hello World! Hello {}!".format(name)

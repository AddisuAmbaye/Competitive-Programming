class BrowserHistory:
    def __init__(self, homepage):
        self.history = [homepage]
        self.curr_idx = 0

    def visit(self, url):
        # clear forward history
        self.history = self.history[:self.curr_idx+1]
        # add new url to history
        self.history.append(url)
        self.curr_idx += 1

    def back(self, steps):
        self.curr_idx = max(0, self.curr_idx - steps)
        return self.history[self.curr_idx]

    def forward(self, steps):
        self.curr_idx = min(len(self.history)-1, self.curr_idx + steps)
        return self.history[self.curr_idx]
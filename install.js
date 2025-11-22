module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/cocktailpeanut/OmniGen app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio spaces",
          "uv pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          xformers: true,
          triton: true
        }
      }
    }
  ]
}

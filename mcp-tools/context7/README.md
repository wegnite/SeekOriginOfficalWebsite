# Context7 MCP Server

Context7 is an MCP server that dynamically injects up-to-date, version-specific documentation into your AI prompts.

## Features
- Real-time documentation access
- Version-specific code examples
- Universal compatibility with MCP clients

## Installation
Already installed as a dev dependency:
```bash
pnpm add -D @upstash/context7-mcp
```

## Configuration for Claude Code

To use Context7 with Claude Code, you need to add it to your MCP configuration file.

### Location of MCP Config
The MCP configuration file should be located at:
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- Linux: `~/.config/Claude/claude_desktop_config.json`

### Configuration Example
Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "context7": {
      "command": "node",
      "args": ["/Users/shengdongyang/githubWrokspace/SeekOriginOfficialWebsite/node_modules/@upstash/context7-mcp/dist/index.js"]
    }
  }
}
```

## API Key Setup

Context7 may require an API key for certain features. Set it as an environment variable:

```bash
export CONTEXT7_API_KEY="your-api-key-here"
```

Or add it to your MCP configuration:

```json
{
  "mcpServers": {
    "context7": {
      "command": "node",
      "args": ["/Users/shengdongyang/githubWrokspace/SeekOriginOfficialWebsite/node_modules/@upstash/context7-mcp/dist/index.js"],
      "env": {
        "CONTEXT7_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

## Usage

Once configured, you can use Context7 in your prompts by mentioning "use context7" when you need up-to-date documentation.

## Troubleshooting

1. **Context7 not found**: Make sure to restart Claude Code after adding the configuration
2. **API key issues**: Verify your API key is correctly set in the environment or config
3. **Path issues**: Ensure the path to the context7 module is correct in your configuration
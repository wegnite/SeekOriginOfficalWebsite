# MCP Configuration Setup Guide

This guide will help you configure MCP (Model Context Protocol) tools for use with Claude Code.

## Configuration File Location

The MCP configuration file should be placed at:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

## Step-by-Step Setup

### 1. Locate Your Config File

```bash
# macOS
open ~/Library/Application\ Support/Claude/

# Windows (in PowerShell)
explorer %APPDATA%\Claude\

# Linux
xdg-open ~/.config/Claude/
```

### 2. Copy Example Configuration

Use the example configuration from `mcp-tools/claude-config-example.json` as a starting point.

### 3. Update Paths

Replace the example paths with your actual project path:
```json
{
  "mcpServers": {
    "context7": {
      "command": "node",
      "args": ["/Users/YOUR_USERNAME/path/to/project/node_modules/@upstash/context7-mcp/dist/index.js"]
    }
  }
}
```

### 4. Add API Keys

Some MCP servers require API keys:

#### Context7 API Key
1. Sign up at https://context7.ai
2. Get your API key from the dashboard
3. Add to config:
```json
"env": {
  "CONTEXT7_API_KEY": "your-actual-api-key"
}
```

#### GitHub Token
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with appropriate permissions
3. Add to config:
```json
"env": {
  "GITHUB_TOKEN": "ghp_your_token_here"
}
```

#### Brave Search API Key
1. Sign up at https://brave.com/search/api/
2. Get your API key
3. Add to config:
```json
"env": {
  "BRAVE_SEARCH_API_KEY": "your-brave-api-key"
}
```

### 5. Restart Claude Code

After updating the configuration, restart Claude Code for changes to take effect.

## Verifying MCP Tools

To verify MCP tools are working:

1. **Context7**: Type "use context7 to get React documentation"
2. **Filesystem**: Ask to "list files in current directory"
3. **GitHub**: Ask to "search GitHub for React components"
4. **Brave Search**: Ask to "search the web for latest Next.js features"

## Troubleshooting

### Tool Not Found
- Check the path in configuration is correct
- Ensure the tool is installed in node_modules
- Restart Claude Code

### Permission Denied
- Check file permissions
- On macOS, you may need to grant Terminal/Claude access in System Preferences

### API Key Issues
- Verify API key is valid
- Check for typos in the configuration
- Ensure API key has necessary permissions

## Available MCP Tools

### Already Configured (System-wide)
- playwright
- puppeteer-real-browser
- filesystem
- github
- memory
- sequential-thinking
- brave-search
- fetch
- ide

### Project-specific Tools
- context7 (installed in this project)
- vitest (for testing)
- playwright (for E2E testing)

## Security Best Practices

1. **Never commit API keys**: Keep them in environment variables
2. **Use minimal permissions**: Only grant necessary access
3. **Rotate keys regularly**: Update API keys periodically
4. **Monitor usage**: Check API usage dashboards

## Advanced Configuration

### Custom Environment Variables
```json
{
  "mcpServers": {
    "custom-tool": {
      "command": "node",
      "args": ["path/to/tool"],
      "env": {
        "NODE_ENV": "production",
        "CUSTOM_VAR": "value"
      }
    }
  }
}
```

### Working Directory
```json
{
  "mcpServers": {
    "tool-with-cwd": {
      "command": "node",
      "args": ["tool.js"],
      "cwd": "/path/to/working/directory"
    }
  }
}
```

## Getting Help

- MCP Documentation: https://modelcontextprotocol.io
- Claude Code Docs: https://docs.anthropic.com/en/docs/claude-code/mcp
- GitHub Issues: https://github.com/anthropics/claude-code/issues
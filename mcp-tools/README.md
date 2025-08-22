# MCP Tools Directory

This directory contains all Model Context Protocol (MCP) tools and servers used in this project.

## Structure
```
mcp-tools/
├── context7/          # Context7 MCP server for real-time documentation
└── README.md         # This file
```

## Installation Guide for New MCP Tools

When installing new MCP tools, follow these steps:

1. **Install in project root**:
   ```bash
   pnpm add -D @package-name/mcp-server
   ```

2. **Create tool directory**:
   ```bash
   mkdir -p mcp-tools/tool-name
   ```

3. **Add documentation**:
   Create a README.md in the tool directory with:
   - Tool description
   - Installation steps
   - Configuration instructions
   - Usage examples

4. **Configure in Claude Code**:
   Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:
   ```json
   {
     "mcpServers": {
       "tool-name": {
         "command": "node",
         "args": ["path/to/tool/index.js"]
       }
     }
   }
   ```

## Currently Installed MCP Tools

### 1. Context7
- **Purpose**: Dynamic documentation injection
- **Status**: ✅ Installed
- **Path**: `node_modules/@upstash/context7-mcp`
- **Usage**: Real-time library documentation and code examples

### 2. Vitest
- **Purpose**: Unit testing framework
- **Status**: ✅ Installed
- **Config**: `vitest.config.ts`
- **Commands**: 
  - `pnpm test` - Run tests in watch mode
  - `pnpm test:ui` - Open Vitest UI
  - `pnpm test:coverage` - Generate coverage report

### 3. Playwright
- **Purpose**: End-to-end browser testing
- **Status**: ✅ Installed  
- **Config**: `playwright.config.ts`
- **Commands**:
  - `npx playwright test` - Run E2E tests
  - `npx playwright test --debug` - Debug mode
  - `npx playwright show-report` - View test report

## Available MCP Servers (System-wide)

These are already configured in your Claude Code:
- playwright
- postgresql
- puppeteer-real-browser
- fetch
- github
- filesystem
- memory
- sequential-thinking
- everything
- brave-search
- sqlite
- git
- puppeteer

## Adding New MCP Tools

To add a new MCP tool to this project:

1. Search for the tool on npm or GitHub
2. Install it as a dev dependency in the project root
3. Create a subdirectory in `mcp-tools/` with the tool name
4. Document the configuration and usage
5. Update Claude Code configuration
6. Restart Claude Code to activate the tool

## Useful Resources

- [MCP Official Documentation](https://modelcontextprotocol.io)
- [MCP Servers Repository](https://github.com/modelcontextprotocol/servers)
- [Claude Code MCP Guide](https://docs.anthropic.com/en/docs/claude-code/mcp)
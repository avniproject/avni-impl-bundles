# MCP (Model Context Protocol) Configuration

This directory contains the MCP server configuration for the Avni implementation bundle project.

## Setup Instructions

### 1. Install Google Drive MCP Server

```bash
npm install -g @piotr-agier/google-drive-mcp
```

### 2. Configure Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable APIs:
   - Google Drive API
   - Google Sheets API
   - Google Docs API (optional)

### 3. Create OAuth Credentials

1. Go to "APIs & Services" > "OAuth consent screen"
2. Configure consent screen (External user type)
3. Go to "Credentials" > "Create Credentials" > "OAuth client ID"
4. Choose "Desktop application"
5. Download the JSON file
6. Rename to `gcp-oauth.keys.json` and place in this directory

### 4. Link Configuration to Windsurf/Claude

Copy the configuration to your Claude Desktop config:

**macOS:**
```bash
cp .mcp/claude_desktop_config.json ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Windows:**
```bash
copy .mcp\claude_desktop_config.json %APPDATA%\Claude\claude_desktop_config.json
```

### 5. Test Setup

```bash
cd /path/to/avni-impl-bundles
npx @piotr-agier/google-drive-mcp auth
```

## Available Tools

Once configured, you'll have access to:

- **Google Sheets Operations:**
  - Create, read, update spreadsheets
  - Format cells and add formulas
  - Manage worksheets and ranges

- **Google Drive Operations:**
  - Search and organize files
  - Create folders and documents
  - Share and manage permissions

## Team Setup

Each team member needs to:
1. Follow setup instructions above
2. Create their own `gcp-oauth.keys.json` file (not version controlled)
3. Copy the `claude_desktop_config.json` to their local Claude config

## Security

- OAuth credentials (`gcp-oauth.keys.json`) are gitignored
- Only configuration templates are version controlled
- Each developer maintains their own authentication tokens

## Files

- `claude_desktop_config.json` - MCP server configuration
- `gcp-oauth.keys.json.example` - OAuth credentials template
- `README.md` - This setup guide

## Troubleshooting

- Ensure OAuth credentials are correctly placed
- Verify required APIs are enabled in Google Cloud Console
- Restart Windsurf/Claude Desktop after configuration changes
- Re-authenticate: `npx @piotr-agier/google-drive-mcp auth`

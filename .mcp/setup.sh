#!/bin/bash

# MCP Setup Script for Avni Implementation Bundle
# This script sets up the Google Sheets MCP server for team development

set -e

echo "🚀 Setting up MCP Google Sheets integration..."

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is required but not installed. Please install Node.js first."
    exit 1
fi

# Install Google Drive MCP server globally
echo "📦 Installing Google Drive MCP server..."
npm install -g @piotr-agier/google-drive-mcp

# Check if OAuth credentials exist
if [ ! -f ".mcp/gcp-oauth.keys.json" ]; then
    echo "⚠️  OAuth credentials not found."
    echo "📝 Please:"
    echo "   1. Copy .mcp/gcp-oauth.keys.json.example to .mcp/gcp-oauth.keys.json"
    echo "   2. Fill in your Google Cloud OAuth credentials"
    echo "   3. Run this script again"
    exit 1
fi

# Detect OS and copy config to appropriate location
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    CONFIG_DIR="$HOME/Library/Application Support/Claude"
    mkdir -p "$CONFIG_DIR"
    cp .mcp/claude_desktop_config.json "$CONFIG_DIR/claude_desktop_config.json"
    echo "✅ Configuration copied to macOS Claude Desktop"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    CONFIG_DIR="$APPDATA/Claude"
    mkdir -p "$CONFIG_DIR"
    cp .mcp/claude_desktop_config.json "$CONFIG_DIR/claude_desktop_config.json"
    echo "✅ Configuration copied to Windows Claude Desktop"
else
    echo "⚠️  Unsupported OS. Please manually copy .mcp/claude_desktop_config.json to your Claude Desktop config location"
fi

# Test authentication
echo "🔐 Testing authentication..."
if GOOGLE_DRIVE_OAUTH_CREDENTIALS=".mcp/gcp-oauth.keys.json" npx @piotr-agier/google-drive-mcp auth; then
    echo "✅ MCP Google Sheets setup complete!"
    echo "🎉 You can now use Google Sheets integration in Windsurf/Claude Desktop"
else
    echo "❌ Authentication failed. Please check your OAuth credentials."
    exit 1
fi

#!/bin/bash

# Exit on error
set -e

echo "🚀 Setting up portfolio project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🛠 Building project..."
npm run build

echo "✨ Setup complete! Run 'npm run dev' to start the development server." 
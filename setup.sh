#!/bin/bash

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install Node.js dependencies
npm install

# Build the project
npm run build

# Start the development server
npm run dev 
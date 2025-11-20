# Amphibian Road Mortality Data Collection - Phase 1

Validation system for testing standardized data collection workflow with volunteers.

## Components

- **Field Form** (`field-form/`) - Quick capture interface for field use
- **Detail Form** (`detail-form/`) - Review and add details after patrol
- **Scripts** (`scripts/`) - Google Apps Script for Sheets integration

## Setup

1. Copy Google Apps Script to your Google Sheet (see `scripts/README.md`)
2. Update API endpoint URLs in JavaScript files
3. Deploy to GitHub Pages or open `field-form/index.html` locally

## Usage

- **Volunteers:** Bookmark `field-form/index.html` on phone
- **After patrol:** Use `detail-form/index.html` to add details

See `docs/plans/2025-11-19-amphibian-road-mortality-data-collection-design.md` for complete design.

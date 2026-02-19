# DERM Technical Exercise: Fix the Pipeline

## 🎯 Overview

Welcome! This exercise tests your ability to debug and improve a CI/CD pipeline for a React application. You'll be working with GitHub Actions, implementing testing strategies, and optimizing build performance.

**Time Estimate:** 4-6 hours
**Deadline:** 7 days from receipt

## 🐛 The Problem

This repository contains a React application with a **broken CI/CD pipeline**. Your job is to:

1. **Fix the broken build** - The pipeline is failing for multiple reasons
2. **Implement visual regression testing** - Choose and integrate a visual testing tool
3. **Add performance monitoring** - Implement Lighthouse CI with appropriate budgets
4. **Optimize build performance** - Minimize pipeline duration as much as possible
5. **Set up quality gates** - Ensure code quality, coverage, and security

## 📋 Requirements

### 1. Fix the Broken Build (Required)

The CI/CD pipeline in `.github/workflows/ci.yml` is broken. Find and fix all issues to get it passing.

**Hints:**
- Check if all necessary steps are present
- Look for missing configurations
- Review the code for linting errors
- Check test coverage

### 2. Visual Regression Testing (Required)

Implement visual regression testing using a tool of your choice:

**Options:**
- Percy
- Applitools Eyes
- Chromatic
- BackstopJS
- Playwright with screenshots
- Or another tool you prefer

**Requirements:**
- Must run in CI/CD pipeline
- Must test at least 2 different viewports
- Must test the application interactions
- Document your tool choice and why

### 3. Performance Monitoring (Required)

Implement Lighthouse CI to monitor web performance:

**Requirements:**
- Configure Lighthouse CI in the pipeline
- Set performance budgets for:
  - Performance score
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Total Blocking Time (TBT)
- Budgets should be realistic but strict
- Pipeline should fail if budgets are exceeded
- Document and explain your choices

### 4. Build Optimization (Required)

Improve the CI/CD build performance:

**Suggestions:**
- Implement dependency caching
- Parallelize jobs where possible
- Optimize test execution
- Consider build artifact caching

**Document:**
- Baseline build time
- Optimized build time
- Percentage improvement
- What optimizations you applied

### 5. Quality Gates (Required)

Ensure the following quality gates are enforced:

- ✅ Linting passes (no errors)
- ✅ Test coverage ≥ 80%
- ✅ All tests pass
- ✅ Build succeeds
- ✅ Visual tests pass
- ✅ Performance budgets met

### 6. Bonus (Optional)

Extra credit for:
- Security scanning (npm audit, Snyk, etc.)
- Deployment workflow (staging/production)
- Advanced caching strategies
- Monitoring and alerting
- Documentation improvements

## 🚀 Getting Started

### Prerequisites

- Node.js 22+ installed
- npm or yarn
- Git
- GitHub account

### Setup

1. **Fork the repository:**

2. **Install dependencies:**
   ```bash
   cd derm-tech-challenge
   npm install
   ```

3. **Run the app locally:**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173/

4. **Run linter:**
   ```bash
   npm run lint
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

6. **Build:**
   ```bash
   npm run build
   ```

## 📝 Submission

### What to Submit

1. **Your private GitHub repository** with all changes (invite javamate)
2. **SOLUTION.md** documenting your work (use SOLUTION_TEMPLATE.md)
3. **Link to a successful CI/CD run** showing all checks passing

Make sure your repository is a private fork of this repository, and that you invite this repository owner (javamate) to your private repo with read/pull access. Navigate to your repository on GitHub, go to "Settings" > "Collaborators" and click on "Add people".

### Documentation Requirements

In your `SOLUTION.md`, include:

1. **Issues Found** - List all problems you discovered
2. **Solutions Implemented** - How you fixed each issue
3. **Tool Choices** - Why you chose specific tools
4. **Performance Results** - Before/after metrics
5. **Trade-offs** - Any decisions or compromises made
6. **Future Improvements** - What you would do with more time

### Evaluation Criteria

You'll be evaluated on:

- **Problem-solving** (30%) - Did you find and fix all issues?
- **Technical implementation** (40%) - Quality of your solutions
- **Documentation** (20%) - Clarity and completeness
- **Best practices** (10%) - Following industry standards

## 🤔 FAQs

**Q: Can I use AI tools like ChatGPT?**  
A: Yes! We want to see how you use tools effectively in real scenarios.

**Q: What if I get stuck?**  
A: You can ask clarifying questions about requirements, but we can't provide technical help.

**Q: Can I use different tools than suggested?**  
A: Absolutely! We care about your approach and reasoning, not specific tools.

**Q: What if I don't finish everything?**  
A: Submit what you have. Quality over quantity. Document what you would do next.

**Q: Can I modify the React app code?**  
A: Yes, if needed to fix issues or improve testability.

## 📞 Questions?

If you have questions about the requirements or need clarification, please reach out!

---

**Good luck! 🚀**

We're excited to see your solution!

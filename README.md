# Portfolio
This is a portfolio website created by Satyendra Shrivastava
This is portfolio is created using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project

[![Product Name Screen Shot](/READMEdocs/screenshot.gif)](https://example.com)

There are many portfolio website templates available on Github, however, I didn't find one that really suit my needs so I created this one. A simple, easy to configure, lightweight, and responsive static portfolio website.

I know one template doesn't fulfill everyone's needs. So I'll try adding more features in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

**Features**

- [x] Easy to configure
- [x] SEO friendly
- [x] Responsive
- [x] Lightweight
- [x] Linktree Page

**Built with** [Nextjs](https://nextjs.org/) & [Bootstrap5](https://getbootstrap.com).



<!-- GETTING STARTED -->
# Getting Started

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below. Please feel free to reach out to me by filing an [issue](https://github.com/hashirshoaeb/portfolio/issues) or emailing me at hashirshoaeb@gmail.com for help configuring your project.

## Prerequisites

You should have [Nodejs](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) installed on your PC. You should also own a GitHub account.

## Setup

1. Fork this repoistory and clone it to your local machine.
    ```sh
      git clone https://github.com/<your-username>/portfolio.git
    ``` 

2. Edit the [config/config.js](https://github.com/hashirshoaeb/portfolio/blob/main/config/config.js) file. Replace [config/profile.png](https://github.com/hashirshoaeb/portfolio/blob/main/config/profile.png) with your image. 
    >Note: You need to rename your image file as `profile.png`.

3. Run following scripts in terminal/command prompt to install dependencies.
    ```sh
      npm install
      npm run build
    ```
## Testing

1. To test on your local server, run the following command:
    ```sh
      npm run dev
    ```

2. Open the browser to http://localhost:3000/

## Deployment

If it works locally, you can deploy your project to GitHub Pages. GitHub Pages provides two types of free domains, `<username>.github.io` and `<username>.github.io/<repository>`. You can choose the one that suits your needs. You can learn more about domain types from [here](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

### Deploy to \<your-username>.github.io/portfolio

Simply you just need to commit and push your changes to github. And [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#overview) will take care of the deployment. Your site will be available at `https://<your-username>.github.io/portfolio`

### Deploy to \<your-username>.github.io

Create a new repository with your username as `<your-username>.github.io`. And let the following command do the job for you.

```sh
  npm run predeploy
  node scripts/pages.js <your-username> master
```

Your site will be available at `https://<your-username>.github.io`

>Note: You need to replace `<your-username>` with your username. To add CNAME for custom domain, see [scripts/cname.js](https://github.com/hashirshoaeb/portfolio/blob/main/scripts/cname.js)


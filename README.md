# [Copod Studio](https://twitter.com/copodstudio)

Go from 0 to 1st Podcast with our ready to shoot, Hospitality Centric, Managed Podcast studio.
Book a slot for an instant podcast shoot at [copod.space](https://copod.space/)

## About Project

This project is the landing page cum dashboard web app for copod studio that is being built with open source technologies and is provided as a bounty on our [Dominate Twitter Club](), also have a read on the [Contribution Guide](#rules) section for rules regarding contribution to the project.

### Tech Stack

- **Framework** - [Next.js](https://nextjs.org/)
- **UI** - [Shadcn UI](https://ui.shadcn.com/)
- **Neo Brutal Theme for Shadcn** - [NBRTLSM](https://neobrutalism-components.vercel.app/docs/resources)
- **Auth** - [Supabase](https://supabase.com/auth)
- **Database** - [Supabase (Postgres)](https://supabase.com/database)
- **Payments** - [Paytm payments SDK](https://business.paytm.com/docs/getting-started)

for any query other non-tech queries feel free to contact us on our [Discord](https://discord.gg/xzx7J2WY) channel.

## Contribution Guide

To contribute to the project first fork it from Github and then create a new branch with any name you prefer and start building.

> Make sure you `fork` the project and not just simply `clone` it, forking the project will make a seperate copy on your github handle so that you can manage your own changes and only push the required ones to the main repo here.

we also adhere to the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commiting messages so make sure you write your commit messages in that manner 

## Deploying the App

### Netlify
- `Fork` the project
- Create a new project in Netlify
- Click `Deploy` > `using github` > Choose github repo
- Create these Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
DEPLOYMENT_URL
```

> Create a supabase project with `postgres db` if not already, then find its `URL` and `ANON Key` on [supabase.com](supabase.com)

> Deployment URL is used fill the meta data json

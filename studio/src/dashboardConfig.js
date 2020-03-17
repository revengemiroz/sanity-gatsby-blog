export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e70bc2cf4a75a3f341ad2ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pm9z12kn',
                  apiId: '54f71c4f-90ec-40e3-8d9a-93b96899bb8c'
                },
                {
                  buildHookId: '5e70bc2d42ef2b608b7c3e8b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8d6gnc8f',
                  apiId: '9b9287bb-4913-45a3-97d5-ead9d7c2a8f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/revengemiroz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8d6gnc8f.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

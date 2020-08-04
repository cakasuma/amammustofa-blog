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
                  buildHookId: '5f299688e94e4af950c1e7bd',
                  title: 'Sanity Studio',
                  name: 'amammustofa-blog-studio',
                  apiId: 'edeb9f9a-0e55-4ab4-937a-e5d30fb9d2e0'
                },
                {
                  buildHookId: '5f29968829a7e51b94505a6e',
                  title: 'Blog Website',
                  name: 'amammustofa-blog',
                  apiId: '0b28d4c1-2489-4c67-a47e-0a3edf931a92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cakasuma/amammustofa-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://amammustofa-blog.netlify.app', category: 'apps' }
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

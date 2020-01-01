module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'http://ec2-3-86-3-209.compute-1.amazonaws.com/',
      key: '~/.ssh/Tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Priyatham51/SampleAWSAPI.git',
      path: '/home/ubuntu/api',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
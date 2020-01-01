module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-144-4-153.compute-1.amazonaws.com',
      key: '~/.ssh/Tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Priyatham51/SampleAWSAPI.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
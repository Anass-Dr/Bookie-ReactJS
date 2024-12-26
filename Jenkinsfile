pipeline {
    agent any
    tools {
        git 'Default'
        nodejs 'NodeJS 22'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                script {
                    withAWS(region: 'eu-central-1', credentials: 'jenkinsS3') {
                        sh "aws s3 cp dist/ s3://bookio-project --recursive"
                    }
                }
            }
        }
    }
}
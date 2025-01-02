pipeline {
    agent any
    tools {
        git 'Default'
        nodejs 'NodeJS 22'
    }
    stages {
        stage('Setup Environment') {
            steps {
                withCredentials([file(credentialsId: 'bookio-front-env', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE .env'
                }
            }
        }
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

    post {
        always {
            sh 'rm -f .env'
        }
    }
}
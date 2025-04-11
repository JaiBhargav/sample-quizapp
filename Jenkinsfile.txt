pipeline {
    agent {
        label 'slave'  // 🔁 Replace with your agent's label
    }

    environment {
        DEPLOY_DIR = '/var/www/html'
    }

    stages {
        stage('Checkout Source') {
            steps {
                git branch: 'master', 
                    url: 'https://github.com/JaiBhargav/githubtesting.git', 
                    credentialsId: 'jenkins' // 🔁 Replace with your GitHub credentials ID
            }
        }

        stage('Deploy Static Page') {
            steps {
                echo 'Deploying index.html to Apache directory'
                sh 'sudo cp index.html $DEPLOY_DIR/'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}

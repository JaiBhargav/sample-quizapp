pipeline {
    agent any
    environment {
        CONTAINER_NAME = "deploycontainer"
        APP_DIR = "/var/www/html"
    }

    stages {
        stage('Clone Code from GitHub') {
            steps {
                git 'https://github.com/JaiBhargav/sample-quizapp.git'
            }
        }

        stage('Copy Files to Apache Container') {
            steps {
                script {
                    echo "Copying frontend files to the container..."
                    sh "docker cp index.html ${CONTAINER_NAME}:${APP_DIR}/index.html"
                    sh "docker cp style.css ${CONTAINER_NAME}:${APP_DIR}/style.css"
                    sh "docker cp script.js ${CONTAINER_NAME}:${APP_DIR}/script.js"
                }
            }
        }

        stage('Restart Apache') {
            steps {
                script {
                    echo "Restarting Apache inside the container..."
                    sh "docker exec ${CONTAINER_NAME} service apache2 restart"
                }
            }
        }
    }

    post {
        success {
            echo "Deployed successfully! Check http://<your-ec2-ip>:3333"
        }
        failure {
            echo "Deployment failed. Check console output for errors."
        }
    }
}

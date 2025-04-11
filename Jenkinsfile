pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/JaiBhargav/sample-quizapp.git'
            }
        }

        stage('Deploy to Docker Container') {
            steps {
                script {
                    // Copy files into running Apache container
                    sh 'docker cp index.html deploy_container:/var/www/html/index.html'
                    sh 'docker cp styles.css deploy_container:/var/www/html/style.css'
                    sh 'docker cp script.js deploy_container:/var/www/html/script.js'

                    // Gracefully reload Apache without killing the container
                    sh 'docker exec deploy_container apachectl -k graceful || true'
                }
            }
        }
    }
}

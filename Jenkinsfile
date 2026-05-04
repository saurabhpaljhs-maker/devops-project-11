pipeline {
    agent { label 'project-12' }

    stages {
        stage('Cleanup Old Container') {
            steps {
                // Purane containers ko delete karo
                sh 'docker rm -f test-web balaji-web-container || true'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Nayi image banao Project-12 ki files ke sath
                sh 'docker build -t balaji-app-img .'
            }
        }
        stage('Run Project-12 Container') {
            steps {
                // Ab port 80 par naya container chalega
                sh 'docker run -d --name balaji-web-container -p 80:80 balaji-app-img'
                echo "Bhai, Project-12 ab live hai!"
            }
        }
    }
}
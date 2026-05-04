pipeline {
    agent { label 'project-12' }

    stages {
        stage('Cleanup Old Container') {
            steps {
                // Pehle se chal rahe purane containers ko delete karne ke liye
                sh 'docker rm -f balaji-web-container test-web || true'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t balaji-app-img .'
            }
        }
        stage('Run Fresh Container') {
            steps {
                // Naya container port 80 par chalayenge
                sh 'docker run -d --name balaji-web-container -p 80:80 balaji-app-img'
                echo "Bhai, Project-12 live ho gaya hai port 80 par!"
            }
        }
    }
}

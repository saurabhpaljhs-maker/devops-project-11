pipeline {
    agent { label 'project-12' }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/YOUR_USERNAME/balaji-app.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t balaji-app-img .'
            }
        }
        stage('Remove Old Container') {
            steps {
                // Agar pehle se koi container chal raha ho toh use delete karne ke liye
                sh 'docker rm -f balaji-web-container || true'
            }
        }
        stage('Run New Container') {
            steps {
                sh 'docker run -d --name balaji-web-container -p 80:80 balaji-app-img'
                echo "Bhai, website live ho gayi hai port 80 par!"
            }
        }
    }
}

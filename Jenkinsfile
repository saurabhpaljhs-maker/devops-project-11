pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                // Yahan 'main' branch specify karna zaroori hai
                git branch: 'main', url: 'https://github.com/saurabhpaljhs-maker/devops-project-11.git'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                // sh command Linux ke liye hoti hai, agar Jenkins Windows par hai toh 'bat' use karein
                sh 'docker build -t devops-app-11:${BUILD_NUMBER} .'
            }
        }

        stage('Container Deployment') {
            steps {
                echo 'Deploying Container...'
                sh 'docker rm -f my-app-container || true'
                sh 'docker run -d --name my-app-container -p 80:3000 devops-app-11:${BUILD_NUMBER}'
            }
        }
    }
}

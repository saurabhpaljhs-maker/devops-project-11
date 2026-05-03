pipeline {
    agent any // Abhi ke liye 'any' rakhte hain jab tak node connect na ho jaye

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/saurabhpaljhs-maker/devops-project-11.git'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                sh 'docker build -t devops-app-11:${BUILD_NUMBER} .'
            }
        }

        stage('Container Deployment') {
            steps {
                echo 'Deploying Container...'
                // Purane container ko hatana agar koi chal raha ho
                sh 'docker rm -f my-app-container || true'
                // Naya container start karna
                sh 'docker run -d --name my-app-container -p 80:3000 devops-app-11:${BUILD_NUMBER}'
            }
        }
    }
}
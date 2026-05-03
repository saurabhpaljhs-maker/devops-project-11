pipeline {
    agent { label 'linux-slave' } // 'linux-slave' wahi naam hona chahiye jo apne Node settings me diya hai

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/saurabhpaljhs-maker/devops-project-11.git'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image on Linux Slave...'
                // Linux par 'sh' command hi chalegi
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

pipeline {
    agent { label 'project-12' }

    stages {
        stage('Cleanup Old Container') {
            steps {
                // Purane containers ko saaf karo taaki conflict na ho
                sh 'docker rm -f ramji-web-container test-web || true'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Nayi image build karo
                sh 'docker build -t ramji-app-img .'
            }
        }
        stage('Run Ramji Project') {
            steps {
                // Port 8081 (Bahar) -> Port 3000 (Andar Node.js app)
                sh 'docker run -d --name ramji-web-container -p 8081:3000 ramji-app-img'
                echo "Bhai, Ramji Project port 8081 par live ho gaya hai!"
            }
        }
    }
}

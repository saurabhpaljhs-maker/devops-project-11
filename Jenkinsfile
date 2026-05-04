pipeline {
    agent { label 'project-12' }

    stages {
        stage('Cleanup Old Container') {
            steps {
                // Purane sabhi containers (test-web aur ramji) ko saaf karo
                sh 'docker rm -f test-web ramji-web-container || true'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Nayi image ka naam bhi 'ramji-app-img' rakhte hain
                sh 'docker build -t ramji-app-img .'
            }
        }
        stage('Run Ramji Project Container') {
            steps {
                // Ab port 80 par hamara naya container chalega
                sh 'docker run -d --name ramji-web-container -p 80:80 ramji-app-img'
                echo "Bhai, Ramji Project-12 live ho gaya hai port 80 par!"
            }
        }
    }
}

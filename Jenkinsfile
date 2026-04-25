pipeline {
    agent {
        label "formula-one"
    }
    environment {
        KUBECONFIG = "/home/pablo/.kube/config" 
    }
    stages {
        stage ("build") {
            steps {
                echo "building the application..."
                sh "/home/pablo/.nvm/versions/node/v20.17.0/bin/node -v"
                sh "ls -la"
            }
        }
        stage ("Build image") {
            steps {
                echo "Creating image to project..."
                sh "docker images"
                sh "docker build -t formulaone:v1 ."
                sh "docker images | grep formulaone"

            }
        }
        stage ("Deployment") {
            steps {
                echo "Deployment to project..."
                sh "kind load docker-image formulaone:v1 --name devops"
                sh "kubectl apply -f formula-one.yaml --validate=false"
                
            }
        }
    }
}
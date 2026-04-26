pipeline {
    agent {
        label "formula-one"
    }
    environment {
        KUBECONFIG = "/home/pablo/.kube/config" 
        IMAGE_NAME = "formula-one"
        IMAGE_TAG  = "formula-one:${BUILD_NUMBER}"
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
                sh "docker build -t ${IMAGE_TAG} ."
                sh "docker images | grep ${IMAGE_NAME}"

            }
        }
        stage ("Deployment") {
            steps {
                echo "Deployment to project..."
                sh "kind load docker-image ${IMAGE_TAG} --name devops"
                sh "kubectl apply -f formula-one.yaml --validate=false"
                
            }
        }
    }
}
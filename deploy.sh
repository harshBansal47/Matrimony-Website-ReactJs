echo "Navigating To repository directory"
cd smartmaheshwari_frontend/
ls

echo "Pulling latest changes..."
git pull origin main

echo "Installing dependencies"
npm install

echo "Compile Code "
npm run build

echo "Deployment completed"




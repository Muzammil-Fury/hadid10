<VirtualHost *:80>
    DocumentRoot "C:/xampp/htdocs/test1"
    ServerName hadid.com
</VirtualHost>

<VirtualHost *:80>
	ServerName 9172-1-22-101-13.ngrok.io
  	ProxyPass "/" "http://localhost:4000/"
   	ProxyPassReverse "/" "http://localhost:4000/"
</VirtualHost>
"# hadid10" 

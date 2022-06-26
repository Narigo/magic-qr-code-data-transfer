# Magic QR Code Data Transfer

Ever wondered how to get some data from a computer to your phone without bluetooth and don't want to share it through some server/service on the internet?

You can use your phone's camera to do that!

This web-app lets you create QR codes for longer texts that you can then scan from another device and retrieve its information again.

It will not send any data to the server, the app only manages the creation of QR codes by splitting it into chunks. The same app can be used to retrieve these QR codes and put the information back together. As soon as you have opened the web-page, it will work without using the internet.

Workflow:

1. Go to the Magic QR Code Data Transfer page on the device where you want to send something (the sender). 👩‍💻
2. Input all the text you want to send to the receiving device. ⌨️
3. Go to the Magic QR Code Data Transfer page on the device that you want to get the data to (the receiver). 👨‍💻
4. Scan all the images of the QR codes. 📷
5. Copy the data to your clipboard 😎

## Contributing

There are a couple of issues in the [Project board](https://github.com/Narigo/magic-qr-code-data-transfer/projects/1) that need some attention. It would be nice to work on this.

### Development

If you want to run this project locally or contribute to it, it's easiest to have a container engine running that understands Docker and docker-compose files.

To run the development server for the application, you can run:

```
docker-compose up
```

If you want to run all tests (with end-to-end tests), you can run the following command that should work when opening the container:

```
docker-compose -f docker-compose.yml -f integration/docker-compose.playwright.yml run app pnpm run ci:test
```

If you want to use playwright for live end-to-end testing, an X server is necessary. There is a script for Mac called `playwright.sh` that can be used to open XQuartz (needs to be installed on the machine) and opens a bash that allows running playwright through the npm scripts.

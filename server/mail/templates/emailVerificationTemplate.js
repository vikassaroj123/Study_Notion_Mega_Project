const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #f0f0f0;
				font-family: Arial, sans-serif;
				margin: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100vh;
			}
	
			.card {
				background: rgba(255, 255, 255, 0.2);
				border-radius: 20px;
				backdrop-filter: blur(10px);
				border: 1px solid rgba(255, 255, 255, 0.2);
				box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
				padding: 40px;
				max-width: 600px;
				width: 100%;
				text-align: center;
			}
	
			.logo {
				max-width: 150px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 18px;
				margin-bottom: 20px;
			}
	
			.otp {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 20px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 16px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
				font-size: 24px;
				color: #FF5722;
			}
		</style>
	</head>
	
	<body>
		<div class="card">
			<a href="https://studynotion-edtech-project.vercel.app"><img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png"
					alt="StudyNotion Logo"></a>
			<div class="message">OTP Verification Email</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Thank you for registering with StudyNotion. To complete your registration, please use the following OTP
					(One-Time Password) to verify your account:</p>
				<h2 class="highlight">${otp}</h2>
				<p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.
					Once your account is verified, you will have access to our platform and its features.</p>
			</div>
			<a href="#" class="otp">Verify Now</a>
			<div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:info@studynotion.com">info@studynotion.com</a>. We are here to help!</div>
		</div>
	</body>
	
	</html>
	`;
};
module.exports = otpTemplate;

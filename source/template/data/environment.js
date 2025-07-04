export default function () {
	return {
		environment: process.env.BUILD_ENV || 'production'
	};
}

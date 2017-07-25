<template>
	<div>
		<div>
			这是一个哈哈哈......
		</div>
	
		<ul>
			<li v-for="time in msg">
				{{time}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'secondComponent',
		data() {
			return {
				msg: ["apple", "orange", "map"]
			}
		}
	}
</script>
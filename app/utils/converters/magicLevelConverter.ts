

export const magicLevelConverter = (level: number): string => {
	if (level <= 0) return ''
	else if (level >= 1 && level <= 19) return '#'
	else if (level >= 20 && level <= 39) return '##'
	else if (level >= 40 && level <= 59) return '###'
	else if (level >= 60 && level <= 79) return '####'
	else return '#####'
}

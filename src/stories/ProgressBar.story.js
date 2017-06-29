import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgressBarComponent from '../components/ProgressBarComponent.js';
	
storiesOf('ProgressBar', module)
	.add(
		'Complete', () => (
		<ProgressBarComponent title="Complete" progress="100" />
	)).add(
		'Halfway', () => (
		<ProgressBarComponent title="Progress" progress="50" />
	)).add(
		'Low', () => (
		<ProgressBarComponent title="Progress" progress="20" />
	)).add(
		'Empty', () => (
		<ProgressBarComponent title="Progress" progress="0" />
	))
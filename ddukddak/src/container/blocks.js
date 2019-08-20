//						{
//							type : 'input_dummy',
//						},
//						{
//							type : 'input_value',
//							name : 'number_b',
//							check : 'Number'
//						}
//					inputsInline : true,
//					output: 'String',
//					nextStatement : null,
//					previousStatement : null,
import Blockly from 'node-blockly/browser';

// Category : Data
const data = {
	name : 'Data',
	category : 'Data',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 %1 테스트 %2',
				args0 : [{
					"type": "input_value",
					"name": "train"		   
				},{
					"type": "input_value",
					"name": "test"		   
				}],
				nextStatement : null,
				colour: 200,
				tooltip: 'Data',
			});
		},
	},
	generator : (block) => {
		const message1 = `'${block.getFieldValue('train')}'` || '\'\'';
		const message2 = `'${block.getFieldValue('test')}'` || '\'\'';
		const code = message1+'\n'+message2;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
}
const trainData = {
	name : 'TrainData',
	category : 'Data',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 데이터 %1',
				args0 : [{
					type: 'field_input',
					name: 'NUM',
					check: 'String',
				},],
				output: 'String',
				colour: 210,
				tooltip: 'TrainData',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `training_num=${message} `;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const testData = {
	name : 'TestData',
	category : 'Data',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '테스트 데이터 %1',
				args0 : [{
					type: 'field_input',
					name: 'NUM',
					check: 'String',
				},],
				output: 'String',
				colour: 220,
				tooltip: 'TestData',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `test_num=${message} `;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};

// Category : Layer
const model = {
	name : 'Model',
	category : 'Layer',
	block : {
		init : function() {
			this.jsonInit({
				type : 'block_type',
				message0 : 'Layer %1',
				args0 : [{
					type : 'input_statement',
					name : 'container'	
				},],
				colour : 150,
				tooltip : 'Model',
				nextStatement : null,
				previousStatement : null,
			});
		},
	},
}
const modelLayer = {
	name : 'ModelLayer',
	category : 'Layer',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 방법 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["A","nn.ReLU"],
						["B","nn.LogSigmoid"]
					],					
				},],
				output: 'String',
				colour : 165,
				tooltip : 'ModelLayer',
				nextStatement : null,
				previousStatement : null,
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `${message} `;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
// Category : Training
const training = {
	name : 'training',
	category : 'Training',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 %1 복습 %2',
				args0 : [{
					type : 'input_value',
					name : 'learn',
				},{
					type : 'input_value',
					name : 'epoch',
				}],
				previousStatement : null,
				colour : 100,
				tooltip : 'training',
			});
		},
	},
	generator : (block) => {
		const message1 = `'${block.getFieldValue('learn')}'` || '\'\'';
		const message2 = `'${block.getFieldValue('epoch')}'` || '\'\'';
		const code = message1+'\n'+message2;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
}

const learningRate = {
	name : 'LearningRate',
	category : 'Training',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 속도 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["느리게","500"],
						["보통","1000"],
						["빠르게","2000"]
					],
				},],
				output: 'String',
				colour : 110,
				tooltip : 'LearningRate',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `learning_rate = ${message} `;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const epochs = {
	name : 'Epochs',
	category : 'Training',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '복습 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["한다","1"],
						["안한다","2"]
					],					
				},],
				output: 'String',
				colour : 120,
				tooltip : 'Epochs',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `num_epochs = ${message} `;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};

const blocks =[
	data,
	trainData, 
	testData,
	model, 
	modelLayer, 
	training,
	learningRate,
	epochs
]
export {
	blocks
};
import Ember from 'ember';

export default Ember.Controller.extend({
  skills: skills()
});

/**
 * Fetches skills
 * @method skills
 */
function skills(){
  const BACKEND_SKILLS = ['NodeJS', 'PHP'];
  const FRONTEND_SKILLS = ['AngularJS 1.X', 'EmberJS', 'HTML5', 'CSS3'];
  const DATABASE_SKILLS = ['MongoDB', 'MySql/MariaDB', 'Sql'];

  return [
    {
      skills: BACKEND_SKILLS,
      title: 'Backend Languages'
    },
    {
      skills: FRONTEND_SKILLS,
      title: 'Frontend Skills'
    },
    {
      skills: DATABASE_SKILLS,
      title: 'Database Skills'
    }
  ];
}

<script>
    import { Router, Route } from "svelte-routing";
    import Home from './routes/Home.svelte';
    import Medium from './routes/Medium.svelte';
    import Problem from './routes/Problem.svelte';
    import Solution from './routes/Solution.svelte';

    export let url = '';
</script>

<main>
    <Router url="{url}">
          <Route path="/" component={Home} />

          <Route let:params path="/:medium">
            <Medium {params} />
          </Route>

          <Route let:params path="/:medium/:problem" >
            <Problem {params} />
          </Route>

          <Route let:params path="/:medium/:problem/:solution">
            <Solution {params} />
          </Route>
     </Router>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
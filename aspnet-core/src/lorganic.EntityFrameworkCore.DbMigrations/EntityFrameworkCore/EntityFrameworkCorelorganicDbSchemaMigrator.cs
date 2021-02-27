using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using lorganic.Data;
using Volo.Abp.DependencyInjection;

namespace lorganic.EntityFrameworkCore
{
    public class EntityFrameworkCorelorganicDbSchemaMigrator
        : IlorganicDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCorelorganicDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the lorganicMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<lorganicMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}